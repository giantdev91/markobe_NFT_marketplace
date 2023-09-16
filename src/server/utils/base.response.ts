export function BaseResponse(code:number, message: string, response: any) {
  return {
    status: code,
    message: message,
    data: response
  }
}