import { lazy } from 'react'

export const News = lazy(() => import('../pages/news/News'))
export const NewsInner = lazy(() => import('../pages/news/NewsInner'))
export const Services = lazy(() => import('../pages/services/Services'))
export const ServiceInner = lazy(() => import('../pages/services/ServiceInner'))

export const AboutUs = lazy(() => import('../pages/aboutUs/AboutUs'))
