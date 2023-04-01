import { RootState, AppDispatch } from './../store';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';


export const useAppDispatch : ()=> AppDispatch = useDispatch;
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector; 