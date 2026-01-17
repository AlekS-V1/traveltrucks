import css from './LayoutCatalog.module.css';

interface Props {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

const CatalogLayout = ({ sidebar, children }: Props) => {
  return (
    <section className={css.catalogSection}>
      <aside className={css.catalogMenu}>{sidebar}</aside>
      <div className={css.catalog}>{children}</div>
    </section>
  );
};

export default CatalogLayout;