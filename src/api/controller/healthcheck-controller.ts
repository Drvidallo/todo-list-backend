import { Router, Response } from 'express'

import { HTTP_STATUS_CODES } from '@api/constants'

import { getEnvValue, getServiceByVersion } from '@api/helpers'
import { HealthCheckService } from '../services/v0'


const router = Router()

router.get('/healthcheck', async (req: any, res: Response): Promise<any> => {
  try {
    const service = new HealthCheckService()
    const serviceResponse = await service.healthcheck()
    return res
      .status(HTTP_STATUS_CODES.SUCCESS)
      .json(serviceResponse)
  } catch (error) {
    console.log(error)
    return res
      .status(HTTP_STATUS_CODES.SERVER_ERROR)
      .json(error)
  }
})

export const HealthCheckController = router
