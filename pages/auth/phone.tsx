import Link from 'next/link';
import { GetStaticProps } from 'next';
import fetch from "node-fetch";
import { useForm } from 'react-hook-form';
import styles from '../../styles/Auth.module.css';


export default function Phone(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className="flex flex-col px-10 max-w-lg mx-auto">
      <div className="flex flex-col items-center mt-20">
        <h1 className={styles.title}>Mobile Number</h1>
        <p className={`${styles.intro} ${styles.introWide}`}>
          Please enter your valid phone number. We will send you 4-digit code to verify account.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
        <div
          className="flex w-full h-[50px] shadow-bt-xl rounded-xl overflow-hidden mb-16"
        >
          <select
            className="flex-shrink-0 pl-3 pr-2 appearance-none bg-[#fff] text-xs font-bold tracking-wider focus:outline-none"
          >
            {props.countries.map(({ abbr, code }) => {
              return (
                <option key={abbr}>
                  { abbr } +{ code}
                </option>
              );
            })}
          </select>
          <span className="w-[1px] my-4 bg-alto"></span>
          <input
            placeholder="(123) 456 7890"
            className="flex-auto px-4 text-xs font-bold tracking-wider focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className={styles.submitButton}
        >
          Send Code
        </button>
        <Link href="/auth/register">
          <a className={styles.buttonLink}>
            Sign up with an Account
          </a>
        </Link>
      </form>
      <p className={styles.subtext}>
        Already have an account? - <Link href="/auth/login"><a className="font-bold">Sign In</a></Link>
      </p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    "https://restcountries.eu/rest/v2/all?fields=callingCodes;alpha3Code"
  ).then((response) => response.json());
  const countries = response
    .map(({ alpha3Code, callingCodes }) => {
      return { abbr: alpha3Code, code: callingCodes[0].substr(0, 1) };
    });
  return {
    props: { countries }
  };
};
