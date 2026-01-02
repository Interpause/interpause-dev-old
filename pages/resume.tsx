import Head from 'next/head'
import 'twin.macro'
import { useHideHavbar } from '../components/Nav'

export default function OldIndex() {
  useHideHavbar()
  return (
    <>
      <Head>
        <title>Interpause | Resume</title>
        <meta name='description' content='Resume.' />
        <meta name='topic' content='resume' />
        <meta name='keywords' content='interpause, developer, maker' />
      </Head>
      <div tw='grid fixed h-full w-full place-items-center'>
        <h1 tw='text-4xl'>Loading...</h1>
      </div>
      <embed
        src='https://bucket.interpause.dev/resume.pdf'
        type='application/pdf'
        tw='fixed inset-0 m-auto h-full max-w-full'
        width='1428px'
        height='864px'
      />
    </>
  )
}
