import { lazy } from 'react'

const UploadBigFile = lazy(() => import('@src/components/Upload/UploadBigFile'))

const routeConfig = [
  {
    path: '/components/uploadBigFile',
    component: UploadBigFile
  },
]

export default routeConfig