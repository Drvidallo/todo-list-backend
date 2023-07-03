import { Router, Response } from 'express'

import { HTTP_STATUS_CODES } from '@api/constants'

import { getEnvValue, getServiceByVersion } from '@api/helpers'
import  {app} from '../dao/database-config'
import { getFirestore, collection, getDocs, getDoc, addDoc, setDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';

import { CrudService } from '../services/v0'


const router = Router()

const db = getFirestore(app);

router.get('/getAllPosts', async (req: any, res: Response): Promise<any> => {

  try {   
    const service = new CrudService()
    const serviceResponse = await service.getPost()

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
  
router.post('/addPost', async (req: any, res: Response): Promise<any> => {
  const body = req.body
 
  try {
    const service = new  CrudService()
    const serviceResponse = await service.addPost(body.title, body.message)

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

router.patch('/updatePost', async (req: any, res: Response): Promise<any> => {
  const body = req.body

  try {
    const service = new  CrudService()
    const serviceResponse = await service.updatePost(body.id, body.title, body.message)

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

router.get('/deletePost', async (req: any, res: Response): Promise<any> => {
  const id = req.query.id

  try {
    const service = new  CrudService()
    const serviceResponse = await service.deletePost(id)
    
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


export const EmailController = router
