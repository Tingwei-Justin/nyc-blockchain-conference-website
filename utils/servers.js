import { handleGet, handlePost } from './axios'
import { QUERY_VOTE } from '../contants/apis'

export const queryVote = async (params) => {
  return await handleGet({QUERY_VOTE, params})
}