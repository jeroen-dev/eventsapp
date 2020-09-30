import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { increment, decrement } from './testReducer';
import { openModal } from '../../app/common/modals/modalReducer';

export default function Sandbox() {
  const [target, setTarget] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);
  const { loading } = useSelector((state) => state.async);
  return (
    <>
      <h1>Testing 123</h1>
      <h3>The data is: {data}</h3>
      <Button
        name='increment'
        content='increment'
        color='green'
        onClick={(e) => {
          dispatch(increment(20));
          setTarget(e.target.name);
        }}
        loading={loading && target === 'increment'}
      />
      <Button
        name='decrement'
        content='decrement'
        color='red'
        onClick={(e) => {
          dispatch(decrement(10));
          setTarget(e.target.name);
        }}
        loading={loading && target === 'decrement'}
      />
      <Button
        content='open modal'
        color='teal'
        onClick={() =>
          dispatch(openModal({ modalType: 'TestModal', modalProps: { data } }))
        }
      />
    </>
  );
}
