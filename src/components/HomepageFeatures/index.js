import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Automated Calendarization and Pricing',
    Svg: require('@site/static/img/calendar.svg').default,
    description: (
      <>
        PropertEase was designed to reduce manual work by property owners when working with different listing websites.
      </>
    ),
  },
  {
    title: 'Dynamic Price Adjustment',
    Svg: require('@site/static/img/monitor-line-chart.svg').default,
    description: (
      <>
        PropertEase aids property owners by dynamically changing pricing based on market fluctuations.
      </>
    ),
  },
  {
    title: 'User-friendly Dashboard',
    Svg: require('@site/static/img/user-friendly-dashboard.svg').default,
    description: (
      <>
        All this packed into a easy to use user interface.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
