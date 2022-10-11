import { useRef } from 'react';
import { useAppDispatch } from '@store/store';
import { dec, inc, incrementAsync } from '@store/slices/counter.slice';

export function Navbar() {
  const dispatch = useAppDispatch();
  const amountRef = useRef<HTMLInputElement | null>(null);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3 mb-2">
            <label className="form-label" htmlFor="byAmount">Amount to Increment</label>
            <input ref={amountRef} defaultValue={1} className="form-control" placeholder="your amount" type="text" name="" id="byAmount"/>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <button
          className="btn btn-success"
          onClick={() => dispatch(inc())}
        >Increment
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(dec())}
        >Decrement
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            dispatch(incrementAsync({ value: +(amountRef.current?.value || 0) ?? 1, delaySeed: 1000 }));
          }}
        >Increment By Amount
        </button>
      </div>

    </>
  );
}

export default Navbar;
