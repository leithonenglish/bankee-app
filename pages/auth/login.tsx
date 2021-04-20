import Link from 'next/link';
import { useForm } from 'react-hook-form';
import styles from '../../styles/Auth.module.css';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className="flex flex-col px-10 max-w-lg mx-auto">
      <div className="flex flex-col items-center mt-20">
        <h1 className={styles.title}>Welcome Back!</h1>
        <p className={styles.intro}>
          Sign in to continue
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-16">
        <input
          ref={register({ required: true })}
          className={styles.input}
          type="text"
          name="email"
          autoComplete="email"
          placeholder="Email Address"
        />
        <div className="flex flex-col">
          <input
            ref={register({ required: true })}
            className={styles.input}
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className={styles.submitButton}
        >
          Sign in my Account
        </button>
      </form>
      <p className={styles.subtext}>
        Don't have an account? - <Link href="/auth/register"><a className="font-bold">Sign Up</a></Link>
      </p>
    </div>
  )
}
