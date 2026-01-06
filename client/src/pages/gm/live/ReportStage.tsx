
import { Button } from '@/components/ui/button';

import {

  CheckCircle2,

} from 'lucide-react';

export default function ReportStage() {
  return (
    <div className='space-y-6 animate-in fade-in slide-in-from-right-4 duration-500'>
      <div className='flex justify-between items-center bg-brand-green/10 p-6 rounded-xl border border-brand-green/20'>
        <div>
          <h2 className='text-2xl font-bold text-white mb-2'>Report Ready</h2>
          <p className='text-brand-bright-green'>
            The final strategic foresight report has been generated
            successfully.
          </p>
        </div>
        <div className='flex gap-4'>
          <Button variant='secondary'>Preview PDF</Button>
          <Button>
            Submit to Admin <CheckCircle2 className='ml-2 w-4 h-4' />
          </Button>
        </div>
      </div>

      <div className='bg-white text-black p-12 rounded shadow-2xl max-w-4xl mx-auto min-h-[600px] font-serif'>
        <div className='text-center border-b-2 border-black pb-8 mb-8'>
          <h1 className='text-4xl font-bold mb-4'>
            Strategic Foresight Report
          </h1>
          <h2 className='text-xl text-gray-600'>
            Future of Transportation 2030
          </h2>
          <p className='mt-4 text-sm text-gray-500'>
            Generated on: December 22, 2025
          </p>
        </div>

        <div className='space-y-8'>
          <section>
            <h3 className='text-xl font-bold uppercase tracking-widest mb-4 border-b border-gray-300 pb-2'>
              Executive Summary
            </h3>
            <p className='text-gray-800 leading-relaxed'>
              This session explored the critical implications of autonomous
              systems on urban mobility. Participants identified key
              technological risks and significant opportunities for Dubai Police
              to lead in smart infrastructure security.
            </p>
          </section>

          <section>
            <h3 className='text-xl font-bold uppercase tracking-widest mb-4 border-b border-gray-300 pb-2'>
              Top Priority Challenges
            </h3>
            <div className='grid grid-cols-2 gap-8'>
              <div>
                <h4 className='font-bold text-gray-900 mb-2'>Technological</h4>
                <p className='text-sm text-gray-700'>
                  Quantum decryption threats to V2X communication protocols.
                </p>
              </div>
              <div>
                <h4 className='font-bold text-gray-900 mb-2'>Social</h4>
                <p className='text-sm text-gray-700'>
                  Public resistance to mandatory biometric verification for
                  transit.
                </p>
              </div>
            </div>
          </section>

          {/* Visual placeholder for report content */}
          <div className='h-40 bg-gray-100 rounded flex items-center justify-center text-gray-400 italic'>
            [Detailed Analytics & Charts]
          </div>
        </div>
      </div>
    </div>
  );
}
