import { RiSettingsLine } from 'react-icons/ri';
import { MdDelete } from "react-icons/md";
import { useRef, useState } from 'react';
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import validator from 'validator'
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure, useToast } from '@chakra-ui/react';


const Settings = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [changePassword, setChangePassword] = useState({
    oldPassword: '',
    newPassword: '',
    cnewPassword: '',
  })
  const cancelRef = useRef(null);
  const toast = useToast()

  const handleChangeField = (e) => {
    let field = e.target.name
    setChangePassword({
      ...changePassword,
      [field]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const {/*oldPassword,*/newPassword, cnewPassword } = changePassword

    if (newPassword !== cnewPassword) {
      toast({
        position: 'top-center',
        title: 'confirm password not matched',
        description: "make sure new password and confirm password are same",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return null
    }

    setChangePassword(({
      oldPassword: '',
      newPassword: '',
      cnewPassword: '',
    }))

  }

  const handleDeleteUserAccount = () => {
    // TODO: api endpoint delete account
    onClose()
  }

  function validatePassword() {
    let password = changePassword.newPassword
    return validator.isStrongPassword(password, {
      minLowercase: 1, minLength: 8,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })
  }

  return (
    <div className="grow flex flex-col overflow-hidden px-6 md:px-12">
      <h1 className="text-2xl flex items-center -mx-4"><RiSettingsLine className='inline mx-1 mt-0.5' /> Settings</h1>
      <div className="w-screen h-[1px] bg-slate-200 -mx-4 my-2"></div>
      <form className='w-full md:w-5/12 flex flex-col'>
        <h2 className='text-xl'>change password</h2>
        <div className='relative max-w-80'>
          <input type={`${showOldPassword ? 'text' : 'password'}`} className='bg-red w-full max-w-80 px-2 py-1 mx-2 my-2 accent-bg rounded-md' placeholder='old password' name='oldPassword' onChange={handleChangeField} value={changePassword.oldPassword} />
          {
            changePassword.oldPassword.length > 0 && (showOldPassword ? <FaEyeSlash className={`inline absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer`} onClick={() => setShowOldPassword(!showOldPassword)} /> : <FaEye className={`inline absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer`} onClick={() => setShowOldPassword(!showOldPassword)} />)
          }
        </div>
        <div className='relative max-w-80'>
          <input type={`${showNewPassword ? 'text' : 'password'}`} className='bg-red w-full max-w-80 px-2 py-1 mx-2 my-2 accent-bg rounded-md' placeholder='new password' name='newPassword' onChange={handleChangeField} value={changePassword.newPassword} />
          {
            changePassword.newPassword.length > 0 && (showNewPassword ? <FaEyeSlash className={`inline absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer`} onClick={() => setShowNewPassword(!showNewPassword)} /> : <FaEye className={`inline absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer`} onClick={() => setShowNewPassword(!showNewPassword)} />)
          }
        </div>
        <input type={`password`} className='bg-red w-full max-w-80 px-2 py-1 mx-2 my-2 accent-bg rounded-md' placeholder='confirm new password' name='cnewPassword' onChange={handleChangeField} value={changePassword.cnewPassword} />
        {
          (changePassword.newPassword.length <= 7 && changePassword.newPassword.length > 0) &&
          <div className='text-red-300 text-xs mx-4'>*password should be 8 characters in length</div>
        }
        {
          !validatePassword() && (changePassword.newPassword.length > 0) ?
            <div className='text-red-300 text-xs mx-4'>*password must include at least 1 uppercase, 1 lowercase, 1 number and a special character</div> : <></>
        }
        <input type='submit' disabled={!validatePassword()} value={'submit'} className='bg-blue-400 text-white px-2 py-1 w-20 rounded-lg my-2 mx-4 cursor-pointer disabled:bg-slate-200 disabled:cursor-not-allowed' onClick={handleSubmit} />
      </form>
      <h2 className='text-xl text-red-300'>Delete account</h2>
      <button className='group ring-1 ring-red-300 max-w-fit px-3 py-1 my-2 rounded text-slate-400 hover:bg-red-300 hover:text-white :' onClick={onOpen}>
        Delete your account
        <MdDelete className='inline text-red-300 group-hover:text-white mx-1 -my-0.5' />
      </button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Account
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You want to delete your account.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={handleDeleteUserAccount} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  )
}

export default Settings