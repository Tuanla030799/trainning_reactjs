import { ConsumerProps, createContext, ExoticComponent, ProviderExoticComponent, ProviderProps } from "react";

type Provider<T> = ProviderExoticComponent<ProviderProps<T>>;
type Consumer<T> = ExoticComponent<ConsumerProps<T>>;

interface Context<T> {
  Provider: Provider<T>;
  Consumer: Consumer<T>;
}

const myContext: Context<any> = createContext(null);

export default myContext;
