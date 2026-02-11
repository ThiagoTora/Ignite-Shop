import { styled } from '..'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
})

export const Close = styled(Dialog.Close, {
    backgroundColor: '$gray800',
    border: 0,
    color: '$gray100'
})

export const Content = styled(Dialog.Content, {
  backgroundColor: '$gray800',
  position: 'fixed',
  top: 0,
  right: 0,
  height: '95vh',
  width: 480,
  padding: '2rem',

  display: 'flex',
  flexDirection: 'column',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',

  h2:{
    fontSize: '1.25rem',
    color: '$gray100',
  },

  p: {
    fontSize: '0.875rem',
    color: '$gray300',
    marginTop: '0.25rem',
  },
})

export const Items = styled('div', {
  flex: 1,
  marginTop: '2rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

export const Item = styled('div', {
  display: 'flex',
  gap: '1rem',
  

  img: {
    borderRadius: 8,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    p: {
      color: '$gray100',
      fontSize: '$md',
    },

    strong: {
      color: '$white',
      fontSize: '$lg',
    },

    button: {

      display: 'flex',
      alignItems: 'left',

      color: '$green300',
      background: 'transparent',
      border: 0,
      fontSize: '$sm',

      '&:hover': {
        cursor: 'pointer'
      },

    }
  },
})

export const Footer = styled('footer', {
  marginTop: '2rem',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '$gray100',
    marginBottom: '1rem',
  },

  button: {
    width: '100%',
    height: '3rem',
    borderRadius: 8,
    border: 0,
    backgroundColor: '$green500',
    color: '$white',
    fontWeight: 'bold',
    cursor: 'pointer',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  },
})
