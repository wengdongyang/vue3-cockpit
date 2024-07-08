/** @format */
import styles from './CoCarouselTable.module.less';

import classNames from 'classnames';
import * as lodash from 'lodash';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { defineComponent, isVNode } from 'vue';
// apis
// hooks
// utils
// types
import type { PropType } from 'vue';
import type { IColumn, IDataSource } from './CoCarouselTable.d';
// stores
// mixins
// configs
// components

type IRowClassName = (record: IDataSource, index: number) => string;

type IThClassName = (column: IColumn) => string;

type ITdClassName = (column: IColumn, record?: IDataSource, index?: number) => string;

interface IProps {
  columns: IColumn[];
  dataSource: IDataSource[];
  slidesToShow: number;
  tableTheadThHeight: number;
  tableTbodyTdHeight: number;
  rowClassName?: IRowClassName;
  thClassName?: IThClassName;
  tdClassName?: ITdClassName;
}

export default defineComponent(
  (props: IProps, { emit, slots }) => {
    const { columns, dataSource, slidesToShow, tableTheadThHeight, tableTbodyTdHeight } = props;

    const renderTr = ({ record, index, columns }: { record: IDataSource; index: number; columns: IColumn[] }) => {
      return (
        <ul
          class={classNames(styles['tr'], props?.rowClassName && props.rowClassName(record, index))}
          style={{ height: `${tableTbodyTdHeight}px` }}
        >
          {columns.map((column, idx) => {
            const tdStyle = lodash.assign(
              column.width ? { width: `${column.width}px` } : {},
              column.ellipsis ? {} : {},
              {
                textAlign: column.align || 'left',
                height: `${tableTbodyTdHeight}px`,
                lineHeight: `${tableTbodyTdHeight}px`,
              },
            );
            const text = column.dataIndex ? lodash.get(record, column.dataIndex) : '';

            if (column.type === 'custom') {
              return (
                <li
                  class={classNames(
                    styles['td'],
                    column.ellipsis && styles['td-ellipsis'],
                    props?.tdClassName && props.tdClassName(column, record, index),
                  )}
                  style={tdStyle}
                  key={idx}
                >
                  {slots.bodyCell && slots.bodyCell({ record, index, column, text })}
                </li>
              );
            } else {
              return (
                <li
                  class={classNames(
                    styles['td'],
                    column.ellipsis && styles['td-ellipsis'],
                    props?.tdClassName && props.tdClassName(column, record, index),
                  )}
                  style={tdStyle}
                  key={idx}
                >
                  {text}
                </li>
              );
            }
          })}
        </ul>
      );
    };

    const renderDefaultTbodyTr = ({ columns, dataSource }: { columns: IColumn[]; dataSource: IDataSource[] }) => {
      return <dd class={styles['tbody']}>{dataSource.map((record, index) => renderTr({ record, index, columns }))}</dd>;
    };

    const renderCarouselTbodyTr = ({ columns, dataSource }: { columns: IColumn[]; dataSource: IDataSource[] }) => {
      return (
        <dd class={styles['tbody']}>
          <Swiper
            class={styles['swiper-vertical-multiple']}
            loop={true}
            slidesPerView={slidesToShow}
            direction={'vertical'}
            autoplay={{ delay: 3000 }}
            modules={[Navigation, Autoplay]}
            style={{ height: `${tableTbodyTdHeight * slidesToShow}px` }}
          >
            {dataSource.map((record, index) => (
              <SwiperSlide
                class={styles['swiper-slide-vertical-multiple']}
                style={{ height: `${tableTbodyTdHeight}px` }}
                key={index}
              >
                {renderTr({ record, index, columns })}
              </SwiperSlide>
            ))}
          </Swiper>
        </dd>
      );
    };
    return () => (
      <dl class={styles['table']}>
        <dt class={styles['thead']}>
          <ul class={styles['tr']}>
            {columns.map((column, idx) => {
              const thStyle = lodash.assign(column.width ? { width: `${column.width}px` } : {}, {
                textAlign: column.align || 'left',
                height: `${tableTheadThHeight}px`,
                lineHeight: `${tableTheadThHeight}px`,
              });
              return (
                <li
                  class={classNames(styles['th'], props?.thClassName && props.thClassName(column))}
                  key={idx}
                  style={thStyle}
                >
                  {column.title}
                </li>
              );
            })}
          </ul>
        </dt>
        {slidesToShow <= dataSource.length
          ? renderCarouselTbodyTr({ columns, dataSource })
          : renderDefaultTbodyTr({ columns, dataSource })}
      </dl>
    );
  },
  {
    name: 'CoCarouselTable',
    props: {
      columns: { type: Array, required: true }, // columns
      dataSource: { type: Array, required: true }, // 数据源
      slidesToShow: { type: Number, required: true }, // 展示个数
      tableTheadThHeight: { type: Number, required: false, default: 34 }, // th的高度
      tableTbodyTdHeight: { type: Number, required: false, default: 34 }, // td的高度
      rowClassName: { type: Function as PropType<IRowClassName> },
      thClassName: { type: Function as PropType<IThClassName> },
      tdClassName: { type: Function as PropType<ITdClassName> },
    },
    emits: ['clickRow'],
  },
);
