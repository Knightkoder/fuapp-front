//import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {navigate} from './use-actions'

export default function useRedirectAfterSomeSeconds(
  redirectTo: string,
  seconds: number = 5
) {
  const [secondsRemaining, setSecondsRemaining] = useState(seconds);
  //const router = useRouter();
  useEffect(() => {
    if (secondsRemaining === 0) navigate(redirectTo); //router.push("/");

    const timer = setTimeout(() => {
      setSecondsRemaining((prevSecondsRemaining) => prevSecondsRemaining - 1);
      if (secondsRemaining === 1) navigate(redirectTo);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [secondsRemaining, redirectTo]);

  return { secondsRemaining };
}
