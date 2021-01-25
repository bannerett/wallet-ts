import { createRef, RefObject, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createModalHide } from '../../redux/actions'

export const CreateForm = ({ wallet, setWallet, submitHandler }: any) => {
  const dispatch = useDispatch()
  const selectRef: RefObject<HTMLSelectElement> = createRef()

  useEffect(() => {
    selectRef.current?.focus()
  }, [selectRef])

  return (
    <form onSubmit={e => submitHandler(e)}>
      <select
        className='form-select'
        name='currency'
        value={wallet.currency}
        ref={selectRef}
        required={true}
        onChange={(e: any) =>
          setWallet({ ...wallet, [e.target.name]: e.target.value })
        }
      >
        <option value=''>Select currency</option>
        <option value='uah'>UAH</option>
        <option value='usd'>USD</option>
        <option value='eur'>EUR</option>
      </select>
      <div className='btn-group mt-2'>
        <button type='submit' className='btn btn-outline-success'>
          Submit
        </button>
        <button
          type='reset'
          className='btn btn-outline-danger'
          onClick={() => dispatch(createModalHide())}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
