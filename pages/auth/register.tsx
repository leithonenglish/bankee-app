import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Checkbox, Password } from "../../components/form";
import styles from '../../styles/Auth.module.css';

const schema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
});

export default function Login() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);
  return (
    <div className="flex flex-col px-10 max-w-lg mx-auto">
      <div className="flex flex-col items-center mt-20">
        <h1 className={styles.title}>Welcome!</h1>
        <p className={styles.intro}>
          Please provide following details for your new account
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-16">
        <input
          ref={register}
          className={styles.input}
          type="text"
          name="fullName"
          autoComplete="fullName"
          placeholder="Full Name"
        />
        <input
          ref={register}
          className={styles.input}
          type="text"
          name="email"
          autoComplete="email"
          placeholder="Email Address"
        />
        <Password
          className={styles.input}
          name="password"
          placeholder="Password"
          autoComplete="current-passsword"
        />
        <div className="flex mt-7">
          <Checkbox className="flex-shrink-0 mr-2" />
          <p className="text-xs text-port-gore text-opacity-80 tracking-widest">
            By creating your account you have to agree with our Teams and Conditions.
          </p>
        </div>
        <button
          type="submit"
          className={styles.submitButton}
        >
          Sign up my Account
        </button>
        <Link href="/auth/phone">
          <a className={styles.buttonLink}>
            Sign up with Phone Number
          </a>
        </Link>
      </form>
      <p className={styles.subtext}>
        Already have an account? - <Link href="/auth/login"><a className="font-bold">Sign In</a></Link>
      </p>
    </div>
  )
}
