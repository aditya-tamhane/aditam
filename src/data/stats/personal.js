import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2001-08-12T19:35:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 1,
  },
  {
    key: 'cities',
    label: 'Places visited',
    value: 18,
    link:
      'https://www.google.com/maps/d/embed?mid=1r3_fSITzALiC_JYRL0rCU4PNsiCMWkE&ehbc=2E312F',
  },
  {
    key: 'certifications',
    label: 'Certifications',
    value: 16,
  },
  {
    key: 'location',
    label: 'Hometown',
    value: 'Pune, Maharashtra',
  },
  {
    key: 'experience',
    label: 'Years of Experience',
    value: 0.583334,
  },
];

export default data;
