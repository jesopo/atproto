/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Headers, XRPCError } from '@atproto/xrpc'
import * as ComAtprotoAdminModerationAction from './moderationAction'

export interface QueryParams {}

export interface InputSchema {
  id: number
  reason: string
  createdBy: string
  [k: string]: unknown
}

export type OutputSchema = ComAtprotoAdminModerationAction.View

export interface CallOptions {
  headers?: Headers
  qp?: QueryParams
  encoding: 'application/json'
}

export interface Response {
  success: boolean
  headers: Headers
  data: OutputSchema
}

export function toKnownErr(e: any) {
  if (e instanceof XRPCError) {
  }
  return e
}