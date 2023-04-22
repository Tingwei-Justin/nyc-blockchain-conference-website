import { handleGet, handlePost } from './axios'
import {
  baseUrl,
  QUERY_SPONSOR,
  QUERY_OFFICIAL,
  QUERY_BANNER,
  QUERY_LIGHTSPOT,
  QUERY_AGENDA,
  QUERY_CATEGORY,
  QUERY_ADVISOR,
  QUERY_SECRETARY,
  QUERY_GUEST
} from '../contants/apis'

export const querySponsor = (params) => {
  const url = baseUrl + QUERY_SPONSOR
  return handleGet({url, params})
}

export const queryOfficial = (params) => {
  const url = baseUrl + QUERY_OFFICIAL
  return handleGet({url, params})
}

export const queryBannerList = (params) => {
  const url = baseUrl + QUERY_BANNER
  return handleGet({url, params})
}

export const queryLightSpot = (params) => {
  const url = baseUrl + QUERY_LIGHTSPOT
  return handleGet({url, params})
}

export const queryAgenda = (params) => {
  const url = baseUrl + QUERY_AGENDA
  return handleGet({url, params})
}

export const queryCategory = (params) => {
  const url = baseUrl + QUERY_CATEGORY
  return handleGet({url, params})
}


export const queryAdvisor = (params) => {
  const url = baseUrl + QUERY_ADVISOR
  return handleGet({url, params})
}

export const querySecretary = (params) => {
  const url = baseUrl + QUERY_SECRETARY
  return handleGet({url, params})
}

export const queryGuest = (params) => {
  const url = baseUrl + QUERY_GUEST
  return handleGet({url, params})
}
