import { useEffect } from "react";
import {  useParams } from "react-router-dom";
import { getPokemonThunk } from "../features/global/thunks";
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { RootState } from "../app/store";

export const usePageRefresh = () => {
  const { id } = useParams<{id: string}>();
  const dispatch = useAppDispatch();
  const currentID = useAppSelector(({global}: RootState) => global.pokemon?.id.toString() || undefined);
  useEffect(() => {
    if(id !== currentID && id){
      dispatch(getPokemonThunk(id));
    }
  }, [id]);
};
