import { useRouter } from 'next/router';
import * as React from 'react';

export interface AboutPageProps {
}

export default function AboutPage (props: AboutPageProps) {
  const route = useRouter();
  console.log('About query', route.query);
  return (
    <div>
      About Page
    </div>
  );
}

export function getServerSideProps() {
  return {
    props: {}
  }
}
