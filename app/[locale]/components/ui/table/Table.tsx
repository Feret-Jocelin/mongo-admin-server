import { useI18n } from '@/shared/locales/clients';

import styles from './table.module.scss';
import '@/shared/styles/main.scss';

import SvgIcon from '@/app/[locale]/components/ui/icon/SvgIcon';
import { useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

interface TableProps {
  data_header?: string[];
  data_body?: any[];
  actions?: string[]; // trash, edit
  display?: string; // initial, block
  no_data?: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick?: (action: string, index: number) => void;
}

const Table = ({
  data_header,
  data_body,
  actions,
  display,
  no_data = false,
  onClick,
}: TableProps) => {
  const t = useI18n();

  const [scrollYActive, setScrollYActive] = useState(false);
  const [scrollXActive, setScrollXActive] = useState(false);

  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const pagination = document.querySelector('section#pagination')
      const maxWidth = window.innerWidth - 210;
      const maxHeight = !pagination ? window.innerHeight - 120 : window.innerHeight - 190;

      console.log(pagination, window.innerHeight, maxHeight);
      if (divRef.current) {
        if(divRef.current.offsetWidth > maxWidth) {
          setScrollYActive(true);
        } else {
          setScrollYActive(false);
        }
        if (divRef.current.offsetHeight >= maxHeight) {
          setScrollXActive(true);
        } else {
          setScrollXActive(false);
        }
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);

    if (divRef.current) {
      resizeObserver.observe(divRef.current);
    }

    handleResize();

    return () => {
      resizeObserver.disconnect();
    };
  }, []);


  return (
    <div id="oui" ref={divRef} className={`${styles.tableContainer} scrollable ${scrollYActive ? styles.scroll_y_active : ''} ${scrollXActive ? styles.scroll_x_active : ''}`}>
      {no_data ? (
        <div className={styles['no-data']}>{t('document.noDocument')}</div>
      ) : (
        <table className={styles.table} style={{ display }}>
          <thead className={styles.header}>
            <tr>
              {data_header &&
                data_header.map((title, index) => (
                  <th key={index} className={styles.title}>
                    {title}
                  </th>
                ))}
              {actions && <th className={styles.title}></th>}
            </tr>
          </thead>
          <tbody className={styles.body}>
            {data_body && data_body.map((row, index_column) => (
              <tr key={index_column}>
                {data_header &&
                  data_header.map((column, index_data) => (
                    <td key={index_data}>{row[column]}</td>
                  ))}
                <td className={styles.actions}>
                  {actions &&
                    actions.map((action, index_action) => (
                      <SvgIcon
                        key={index_action}
                        icon_name={action}
                        onClick={() => onClick && onClick(action, index_column)}
                      />
                    ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
