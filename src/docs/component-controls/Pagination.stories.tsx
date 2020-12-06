import React from 'react';
import { Document, Example } from '@component-controls/core';
import { Pagination } from '@component-controls/components';

export default {
  title: 'component-controls/Pagination',
  component: Pagination,
} as Document;

export const overview: Example = () => (
  <Pagination
    prev={{
      link: '/',
      title: 'link to prev',
    }}
    next={{
      link: '/',
      title: 'link to prev',
    }}
  />
);

export const onlyPrev: Example = () => (
  <Pagination
    prev={{
      link: '/',
      title: 'link to prev',
    }}
  />
);

export const onlyNext: Example = () => (
  <Pagination
    next={{
      link: '/',
      title: 'link to next',
    }}
  />
);
