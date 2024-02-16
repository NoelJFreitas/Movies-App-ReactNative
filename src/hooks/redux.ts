import {RootState} from '@src/store';
import {TypedUseSelectorHook, useSelector as useAppSelector} from 'react-redux';

export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;
