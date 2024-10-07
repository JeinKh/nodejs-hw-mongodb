import { Router } from 'express';
import {
  getContactByIdController,
  getContactsController,
  createContactController,
  deleteContactController,
  upsertContactController,
  patchContactController,
} from '../controllers/contacts';
import { ctrlWrapper } from '../utils/ctrlWrapper';

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));

router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

router.post('/contacts', ctrlWrapper(createContactController));

router.delete('contacts/:contactId', ctrlWrapper(deleteContactController));

router.put('contacts/:contactId', ctrlWrapper(upsertContactController));

router.patch('contacts/:contactId', ctrlWrapper(patchContactController));

export default router;
