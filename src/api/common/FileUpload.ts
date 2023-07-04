import { defHttp } from '/@/utils/http/axios'
import { Result, UploadFileParams } from '/#/axios'
import { UploadApiResult } from '/@/api/sys/model/uploadModel'
import { getAppEnvConfig } from '/@/utils/env'
const { VITE_GLOB_API_URL } = getAppEnvConfig()

/**
 * 获取文件预览地址
 */
export const getFilePreviewUrl = (id) => {
  return defHttp.get<Result<string>>({
    url: `/file/get-file-preview-url`,
    params: { id },
  })
}

/**
 * 获取文件预览地址前缀
 */
export const getFilePreviewUrlPrefix = () => {
  return defHttp.get<Result<string>>({
    url: `/file/get-file-preview-url-prefix`,
  })
}

/**
 * 获取文件下载地址
 */
export const getFileDownloadUrl = (id) => {
  return defHttp.get<Result<string>>({
    url: `/file/get-file-download-url`,
    params: { id },
  })
}

/**
 * 上传文件
 * @param params
 * @param onUploadProgress
 */
export function uploadFile(params: UploadFileParams, onUploadProgress: (progressEvent: ProgressEvent) => void) {
  return defHttp.uploadFile<UploadApiResult>(
    {
      url: VITE_GLOB_API_URL + '/file/upload',
      onUploadProgress,
    },
    params,
  )
}

/**
 * 上传文件信息
 */
export interface UpdateFileInfo {
  // 文件id
  id: string
  // 文件名称
  fileName: string
  // 文件后缀
  fileSuffix: string
  // 文件类型
  fileType: string
  // 文件大小
  fileSize: number
}
