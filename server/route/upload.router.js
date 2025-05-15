import { Router } from 'express'
import auth from '../middlewate/auth.js'
import uploadImageController from '../controllers/uploadImage.controller.js'
import upload from '../middlewate/multer.js'

const uploadRouter = Router()

uploadRouter.post("/upload",auth,upload.single("image"),uploadImageController)

export default uploadRouter