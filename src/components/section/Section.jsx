import PropTypes from 'prop-types';
import styles from './Section.module.css'

export const Section = ({title, children}) => {
  const {sectionTitle} = styles

  return (
    <section>
      <h2 className={sectionTitle}>{title}</h2>
      {children}
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};