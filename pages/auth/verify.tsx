import Link from 'next/link';
import Lottie from "lottie-react";
import { useState } from 'react';
import { OTPCode } from '../../components/auth';
import accountDone from "../../assets/lottie/account-done.json";
import styles from '../../styles/Auth.module.css';

export default function Phone(props) {
  const [verifyState, set] = useState({ otp: null, submitted: false });
  const onSubmit = data => console.log(data);
  const handleOnOTPChaged = (event) => {
    set(state => ({ ...state, otp: event }));
  };
  const handleButtonClick = () => {
    if (!verifyState.submitted) {
      set(state => ({ ...state, submitted: true }));
    }
  }
  return (
    <div
      className="flex flex-col justify-between min-h-screen px-10 pb-14 max-w-lg mx-auto md:justify-start"
    >
      <div className="mt-20">
        {verifyState.submitted
          ? (
          <div className="flex flex-col items-center">
            <Lottie animationData={accountDone} loop={false} />
            <h1 className={styles.title}>Account Created!</h1>
            <p className={`${styles.intro} ${styles.introWide}`}>
              Dear user your account has been created successfully. Continue to start using app
            </p>
          </div>
          )
          : (
          <div className="flex flex-col items-center">
            <h1 className={styles.title}>Verify Account!</h1>
            <p className={`${styles.intro} ${styles.introWide}`}>
              Enter 4-digit Code code we have sent to at 
            </p>
            <h1
              className="text-xs text-medium-purple font-bold underline mt-1"
            >
              +0 000 0000000
            </h1>
            <OTPCode className="mb-14 mt-10" onChange={handleOnOTPChaged} />
            <h1
              className="text-xs text-center text-port-gore text-opacity-80 tracking-wider mb-4"
            >
              Didn’t not received the code?
            </h1>
            <button
              className="font-bold text-medium-purple tracking-wider underline"
            >
              Resend Code
            </button>
          </div>
          )}
      </div>
      <div className="md:mt-10">
        <button
          type="submit"
          disabled={!verifyState.otp || verifyState.otp && verifyState.otp.length < 4}
          className={`${styles.submitButton} focus:outline-none`}
          onClick={handleButtonClick}
        >
          {verifyState.submitted ? "Continue" : "Proceed"}
        </button>
        <p
          className="text-xs text-center text-port-gore text-opacity-80 tracking-wider leading-relaxed px-2 mt-5"
        >
          by clicking start, you agree to our&nbsp;
          <Link href="/"><a className="font-bold text-medium-purple underline">Privacy Policy</a></Link> our&nbsp;
          <Link href="/"><a className="font-bold text-medium-purple underline">Teams and Conditions</a></Link>
        </p>
      </div>
    </div>
  )
}
