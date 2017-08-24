import updateObjectProperties from '../packages/redux-toolbelt-immutable-helpers/lib/updateObjectProperties'
import test from 'ava'

test('updateObjectProperties v1', t => {
  const obj = {a: 'a', b: 'b', c: 'c'}

  const obj2 = updateObjectProperties(obj, {b: 'test', d: () => 'd'})

  t.deepEqual(obj, {a: 'a', b: 'b', c: 'c'})

  t.deepEqual(obj2, {a: 'a', b: 'test', c: 'c', d: 'd'})
})

test('updateObjectProperties v2', t => {
  const obj = {a: 'a', b: 'b', c: 'c'}

  const obj2 = updateObjectProperties(obj, ['b', 'c'], 'test')

  t.deepEqual(obj, {a: 'a', b: 'b', c: 'c'})

  t.deepEqual(obj2, {a: 'a', b: 'test', c: 'test'})
})

test('updateObjectProperties v3', t => {
  const obj = {a: 'a', b: 'b', c: 'c'}

  const obj2 = updateObjectProperties(obj, ['b', 'c'], (value, prop) => {
    if(prop === 'b'){
      return 'test-b'
    }
    if(value === 'c'){
      return 'test-c'
    }
  })

  t.deepEqual(obj, {a: 'a', b: 'b', c: 'c'})

  t.deepEqual(obj2, {a: 'a', b: 'test-b', c: 'test-c'})
})