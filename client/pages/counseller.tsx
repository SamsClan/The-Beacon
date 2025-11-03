import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Counseller() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* Hero Section with Image Gallery Background and Login Form */}
      <section className="relative w-full min-h-[882px] overflow-hidden">
        {/* Background Image Gallery - Row 1 */}
        <div className="absolute top-[-78px] left-0 right-0 flex items-center gap-5 h-[300px]">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/af040707ffdfe82bb94d74a9fd49e7b002ac5d3f?width=450" alt="" className="w-[225px] h-[300px] object-cover rounded-[70px]" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/b1a17307eef47accb980d0c168e56534f7e83542?width=338" alt="" className="w-[169px] h-[300px] object-cover rounded-[50px]" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/3862e02475b9b75e3c446fb5d97e3a0fa3557353?width=412" alt="" className="w-[206px] h-[300px] object-cover rounded-[50px]" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/60cdbca43bbe675e6d4b3ba0823f1db2da33a6bb?width=438" alt="" className="w-[219px] h-[300px] object-cover rounded-[50px]" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/5f4a822c7dac14abd47e171d8895487da4b2008f?width=400" alt="" className="w-[200px] h-[300px] object-cover rounded-[50px]" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/c7ad409caae9dbedfcc2ccfcac22071cee9e28c6?width=338" alt="" className="w-[169px] h-[300px] object-cover rounded-[50px]" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/a3b87894d4208524ba209a09514169e85b58ad94?width=338" alt="" className="w-[169px] h-[300px] object-cover rounded-[50px]" />
        </div>

        {/* Background Image Gallery - Row 2 */}
        <div className="absolute top-[227px] left-0 right-0 flex items-center gap-7 h-[300px]">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/529d78f1684a39d0c945b90a42074c1041c3c75f?width=354" alt="" className="w-[177px] h-[300px] object-cover rounded-[50px]" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/3e275fb4f7180569d43e9b15f48c06afe8e866f7?width=432" alt="" className="w-[216px] h-[300px] object-cover rounded-[50px]" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/d4efa3de6226a6e5b8c94252f824277573624173?width=338" alt="" className="w-[169px] h-[300px] object-cover rounded-[50px]" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/9e506140359751c0f0ca686e2aad68680347ac63?width=400" alt="" className="w-[200px] h-[300px] object-cover rounded-[50px]" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/0058fef717c1d86a6b71fea0cbe5bff2b2181201?width=336" alt="" className="w-[168px] h-[300px] object-cover rounded-[50px]" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/c393fabd74f4014f5d2ebd631b9835c5caf7d6f6?width=400" alt="" className="w-[200px] h-[300px] object-cover rounded-[50px]" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/feac2cce2891a642fc45059f6aa2a365acb3dc04?width=424" alt="" className="w-[212px] h-[300px] object-cover rounded-[50px]" />
        </div>

        {/* Background Image Gallery - Row 3 */}
        <div className="absolute top-[529px] left-0 right-0 flex items-center gap-3 h-[340px]">
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/912e76e42c9e2be5d836fca718e93c431f8fced0?width=400" alt="" className="w-[200px] h-[300px] object-cover rounded-[50px]" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/167366cc88c3ebb6e9ef9e7a5929f2a7a4be01e1?width=432" alt="" className="w-[216px] h-[300px] object-cover rounded-[50px]" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/b84cbc2ac60c4378a98f366ff5d92eb8aa16cf6b?width=400" alt="" className="w-[200px] h-[300px] object-cover rounded-[50px]" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/e4b62c189cffde311c9e7dbb8b9b9c0c9ed88dba?width=358" alt="" className="w-[179px] h-[320px] object-cover rounded-[50px]" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/d73aed2b92515d05d9a0e1d77a4febf487a71087?width=338" alt="" className="w-[169px] h-[300px] object-cover rounded-[50px]" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/af51df4873d8a9553172ae26bba3c75ec8af39c3?width=382" alt="" className="w-[191px] h-[340px] object-cover rounded-[50px]" />
          <img src="https://api.builder.io/api/v1/image/assets/TEMP/fd388e166356dc233bbc95fa546f2b3436e8f666?width=400" alt="" className="w-[200px] h-[266px] object-cover rounded-[50px]" />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[600px]">
            {/* Left: Hero Text */}
            <div className="text-white space-y-6 lg:pr-8">
              <h1 className="text-5xl lg:text-7xl font-bold font-lato leading-tight">
                Log In
              </h1>
              <p className="text-2xl lg:text-3xl font-bold font-lato leading-relaxed">
                "Overseeing community wellness and promoting mindfulness through care and guidance."
              </p>
            </div>

            {/* Right: Login Form */}
            <div className="w-full max-w-md mx-auto lg:ml-auto">
              <div className="bg-[#CDCDCD]/90 backdrop-blur-sm rounded-[50px] p-8 lg:p-12 shadow-2xl">
                <div className="space-y-6">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="text-[#1E1E1E] font-inter text-xl lg:text-[22px] font-normal">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-10 rounded-lg border border-[#D9D9D9] bg-[#A19696] text-black"
                    />
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label className="text-[#1E1E1E] font-inter text-xl lg:text-[22px] font-normal">
                      Password
                    </label>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full h-10 rounded-lg border border-[#D9D9D9] bg-[#A19696] text-black"
                    />
                  </div>

                  {/* Forget Password Link */}
                  <div className="text-left">
                    <a href="#" className="text-[#FF0011] text-lg lg:text-xl font-inter hover:underline">
                      Forget Password
                    </a>
                  </div>

                  {/* Admin Login Button */}
                  <Button className="w-full h-14 bg-[#B40000] hover:bg-[#8B0000] border-2 border-[#FF0A0A] rounded-lg text-white text-xl lg:text-2xl font-inter">
                    Admin LogIn
                  </Button>

                  {/* Google Account Link */}
                  <div className="text-center">
                    <a href="#" className="text-black text-base lg:text-lg font-inter underline hover:no-underline">
                      Google Account
                    </a>
                  </div>

                  {/* Sign in Link */}
                  <div className="text-center">
                    <a href="#" className="text-[#0E05F8] text-base lg:text-lg font-inter hover:underline">
                      Sign in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Be Someone's Beacon Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/f2270e8080d23ed125e5273f6d8ea0a0525caa5d?width=754" 
              alt="Sitting meditation illustration" 
              className="w-full max-w-[377px] h-auto"
            />
            <h2 className="text-4xl lg:text-[66px] font-bold font-lato text-center lg:text-left leading-tight">
              Be someone's <span className="text-beacon-blue font-bowlby">Beacon</span> of hope
            </h2>
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/c48da14d127d3ed5c0b8cbb7c502f559641073fe?width=588" 
              alt="Meditation illustration" 
              className="w-full max-w-[294px] h-auto lg:ml-auto"
            />
          </div>
        </div>
      </section>

      {/* You can ease someone's Mental stress */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-[54px] font-bold text-center leading-tight max-w-5xl mx-auto">
            <span className="font-lato text-black">You can ease someone's Mental stress with</span>{' '}
            <span className="text-beacon-blue font-bowlby">Beacon</span>
          </h2>
        </div>
      </section>

      {/* Three Feature Sections Row */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-[32px] font-medium font-lato">
                Build Trust with your expertise
              </h3>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-[32px] font-medium font-lato">
                Improve mental health <span className="text-[#1E00FF]">Together</span>
              </h3>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-[32px] font-medium font-lato">
                Interaction With Student
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Review Your Sessions Section */}
      <section className="py-16 lg:py-24 bg-beacon-cream">
        <div className="container mx-auto px-4">
          <div className="rounded-[50px] bg-beacon-cream border border-black p-8 lg:p-16">
            <h2 className="text-4xl lg:text-[54px] font-bold font-lato text-center text-[#5B5858] mb-12">
              Review Your Sessions!!
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Video Preview */}
              <div className="relative">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/6af57b56a2c86eb49885b1b76f8cd67b55adefd1?width=788" 
                  alt="Session preview"
                  className="w-full rounded-[60px]"
                />
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <svg width="70" height="75" viewBox="0 0 70 75" fill="none">
                    <path d="M14.583 9.375L55.4163 37.5L14.583 65.625V9.375Z" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Phone Mockup */}
              <div className="relative mx-auto">
                <div className="w-[320px] h-[568px] bg-[#B9B9B9] rounded-[50px] border-[10px] border-black p-8 flex flex-col items-center justify-center">
                  <div className="w-[30px] h-[30px] bg-[#020202] rounded-full absolute top-5" />
                  <div className="bg-[#D9D9D9] rounded-[60px] p-8 text-center space-y-4">
                    <h3 className="text-beacon-blue font-bowlby text-[32px]">Beacon</h3>
                    <p className="text-black font-lato text-2xl">Use Beacon for Better someone life</p>
                  </div>
                </div>
                
                {/* Avatar */}
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a83c65a15501a24e20c2c05c3d0829bb896ded99?width=470" 
                  alt="Avatar"
                  className="absolute -right-8 -top-8 w-[235px] h-[261px]"
                />
                
                {/* Speech Bubble */}
                <div className="absolute -right-4 top-1/2 bg-[#F7526F]/60 rounded-[50px] rounded-br-none p-6 max-w-[200px]">
                  <p className="text-sm font-lato text-black">Hi! I'm here to guide you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Mental Health Reports Section */}
      <section className="py-16 lg:py-24 bg-[#F9A1A1]">
        <div className="container mx-auto px-4">
          <div className="rounded-[80px] bg-[#F9A1A1] p-8 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-[44px] font-medium font-lato text-center lg:text-left leading-tight">
                  Review mental health <span className="text-beacon-blue">Reports</span> and <span className="text-beacon-blue">Support</span> your students better
                </h2>
                <p className="text-2xl lg:text-[32px] font-bold font-lato text-center lg:text-left">
                  Talk to them about their concerns — guide them with the best solutions.
                </p>
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/efe83018e29531e6aae1ffd4ad16c9ce6ff482f7?width=560" 
                  alt="Selfie illustration"
                  className="w-full max-w-[280px] mx-auto lg:mx-0"
                />
              </div>

              {/* Right: Phone Mockup with Chart */}
              <div className="mx-auto lg:ml-auto">
                <div className="w-full max-w-[405px] h-[744px] bg-[#E2E2E2] rounded-[50px] border-[10px] border-black p-8">
                  <div className="w-[10px] h-[10px] bg-[#9F9797] rounded-full mx-auto mb-2" />
                  <div className="w-[35px] h-[35px] bg-[#020202] rounded-full mx-auto mb-8" />
                  
                  <h3 className="text-[32px] font-balthazar text-center mb-8">
                    Student mental health Statistics
                  </h3>
                  
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/288efb9135c2bb7f75bc291d74fa3d509c5b1dfe?width=734" 
                    alt="Mental health statistics chart"
                    className="w-full rounded-[47px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beacon Helps to Interact with Students */}
      <section className="py-16 lg:py-24 bg-white relative">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/b8cd53125a2b6432798da241a53240dd11e995e4?width=360" 
          alt="Levitate decoration"
          className="absolute left-8 top-1/2 -translate-y-1/2 w-[180px] h-[135px] -rotate-90 hidden lg:block"
        />
        
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-[60px] font-semibold font-lato text-center mb-12 leading-tight">
            <span className="text-beacon-blue font-bowlby">Beacon</span> Helps to Interact with Students
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
             <div className="bg-green-400 rounded-[20px] p-8 text-center flex items-center justify-center min-h-[148px]">
              <h3 className="text-3xl lg:text-[40px] font-bold font-lato">Stress HeatMap</h3>
            </div>
            
            <div className="bg-[#FF80DB] rounded-[20px] p-8 text-center flex items-center justify-center min-h-[148px]">
              <h3 className="text-3xl lg:text-[40px] font-bold font-lato">Student Review</h3>
            </div>
            
            <div className="bg-[#F66969] rounded-[20px] p-8 text-center flex items-center justify-center min-h-[148px]">
              <h3 className="text-3xl lg:text-[40px] font-bold font-lato">Guest Session</h3>
            </div>
            
            <div className="sm:col-span-2 lg:col-span-1 bg-beacon-yellow rounded-[20px] p-8 text-center flex items-center justify-center min-h-[148px] lg:col-start-2">
              <h3 className="text-3xl lg:text-[40px] font-bold font-lato">Review Peer Groups</h3>
            </div>
          </div>
        </div>

        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/e29ac608793fb8d41fcffc0a8290d3c5ca4d7fa3?width=504" 
          alt="Reading decoration"
          className="absolute right-8 top-1/4 w-[252px] h-[193px] hidden lg:block"
        />
      </section>

      {/* Beacon for the people Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-[54px] font-normal font-bowlby text-center mb-16 leading-tight max-w-4xl mx-auto">
            <span className="text-beacon-blue">Beacon</span> — for the people, by the people who care.
          </h2>

          {/* Connect With Students Card */}
          <div className="bg-beacon-teal rounded-[60px] p-8 lg:p-16 mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-8">
                <h3 className="text-3xl lg:text-[40px] font-semibold font-lato text-white leading-tight">
                  Connect With Students
                </h3>
                
                <div className="space-y-6">
                  <div className="relative">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/e96de207475d747b8e0384a00e147eef1d45498c?width=544" 
                      alt="Dr. Pappi"
                      className="w-full max-w-[272px] rounded-[30px]"
                    />
                    <p className="text-2xl font-baloo mt-2">Dr. Pappi</p>
                    <svg className="absolute bottom-2 left-2 w-[50px] h-[42px]" viewBox="0 0 50 42">
                      <path d="M47.9163 12.25L33.333 21L47.9163 29.75V12.25Z" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M29.1663 8.75H6.24967C3.94849 8.75 2.08301 10.317 2.08301 12.25V29.75C2.08301 31.683 3.94849 33.25 6.24967 33.25H29.1663C31.4675 33.25 33.333 31.683 33.333 29.75V12.25C33.333 10.317 31.4675 8.75 29.1663 8.75Z" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/262d1e475b4a091810cc725dfc4046e32809207e?width=366" 
                    alt="Video chat"
                    className="w-full max-w-[183px] rounded-[108px]"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-4xl lg:text-[50px] font-bold font-lato text-white leading-tight">
                  Here for you, always!
                </h3>
                <p className="text-2xl lg:text-[28px] font-semibold font-lato text-white">
                  Help Students who are in need of you!
                </p>
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7505bc3961bf38a0a6ec86beb5da4f28fe336381?width=742" 
                  alt="Sitting and reading illustration"
                  className="w-full max-w-[371px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Beacon - Designed for people */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-[64px] font-semibold font-lato mb-8 leading-tight max-w-5xl mx-auto">
            <span className="text-beacon-blue font-bowlby">The Beacon</span>{' '}
            <span className="text-beacon-blue">— Designed for people, delivered with care.</span>
          </h2>
          
          <p className="text-2xl lg:text-[32px] font-medium font-lato text-center max-w-4xl mx-auto mb-12 leading-snug tracking-wide">
            From expert-guided therapy to AI-powered sessions, from soothing meditations to personalized song recommendations — connect peer-to-peer with experts and much more.
          </p>

          <Button className="bg-[#2C2C2C] hover:bg-black text-white font-bowlby text-3xl lg:text-[40px] px-12 py-8 rounded-[25px] border-2 border-[#2C2C2C] h-auto">
            Beacon
          </Button>

          <p className="text-lg lg:text-xl font-lato text-center mt-6 underline">
            Click For learn More
          </p>
        </div>
      </section>

      {/* People keep coming back Section */}
      <section className="py-16 lg:py-24 bg-beacon-cream">
        <div className="container mx-auto px-4">
          <div className="rounded-[50px] bg-beacon-cream p-8 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Images */}
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f842b52ef15bb2e272bbc4da9c72a9b078a71696?width=516" 
                  alt="Person 1"
                  className="w-full h-full object-cover rounded-[50px]"
                />
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/5290a6880f5efce177373c4697a47ff284f3fbaa?width=608" 
                  alt="Person 2"
                  className="w-full h-full object-cover rounded-[50px]"
                />
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/85f63a4dcbb7a08caaff5f8eba38ea049ed2f12d?width=432" 
                  alt="Person 3"
                  className="w-full h-full object-cover rounded-[50px]"
                />
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/58a68879a39ee4cbd9cc61397e2e887713cefb2b?width=590" 
                  alt="Dancing illustration"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-[50px] font-normal font-bowlby leading-tight tracking-wide">
                  People keep coming back to boost their mental wellness — together, we heal and grow.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#C0E9FE] rounded-[30px] p-8 flex items-center justify-center text-center">
              <p className="text-2xl lg:text-[32px] font-semibold font-lato leading-tight tracking-wide text-[#040404]">
                "It's okay to not be okay — what matters is taking the next small step toward healing."
                <span className="block mt-4 text-xl">Reminds people that healing isn't instant — it's progress, not perfection.</span>
              </p>
            </div>

            <div className="bg-[#C0E9FE] rounded-[30px] p-8 flex items-center justify-center text-center">
              <p className="text-2xl lg:text-[32px] font-semibold font-lato leading-tight tracking-wide">
                "Your mind deserves the same care, rest, and love you give to others."
                <span className="block mt-4 text-xl">Encourages self-compassion and prioritizing one's own mental well-being.</span>
              </p>
            </div>

            <div className="bg-[#C0E9FE] rounded-[30px] p-8 flex items-center justify-center text-center">
              <p className="text-2xl lg:text-[32px] font-semibold font-lato leading-tight tracking-wide">
                "Talking about your feelings is a sign of strength, not weakness."
                <span className="block mt-4 text-xl">Breaks stigma and normalizes open conversations about mental health.</span>
              </p>
            </div>

            <div className="bg-[#C0E9FE] rounded-[30px] p-8 flex items-center justify-center text-center">
              <p className="text-2xl lg:text-[32px] font-semibold font-lato leading-tight tracking-wide">
                "Every day is a new chance to breathe, reset, and begin again."
                <span className="block mt-4 text-xl">Inspires hope and resilience — reminding people that recovery is always possible.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 lg:py-24 bg-beacon-peach">
        <div className="container mx-auto px-4">
          <div className="rounded-[50px] bg-beacon-peach p-8 lg:p-16 text-center space-y-8">
            <h2 className="text-3xl lg:text-[56px] font-light font-['Bookman Old Style'] leading-tight tracking-wide max-w-4xl mx-auto">
              Join us and connect with others who share your journey.
            </h2>
            
            <h3 className="text-4xl lg:text-[66px] font-normal text-beacon-blue leading-tight tracking-wide max-w-3xl mx-auto">
              Your journey to happiness begins with <span className="font-bowlby">The Beacon</span>.
            </h3>

            <Button className="bg-[#2C2C2C] hover:bg-black text-white font-lato text-2xl lg:text-[32px] px-10 py-6 rounded-[25px] border-2 border-[#2C2C2C] h-auto">
              Start Now
            </Button>
          </div>
        </div>
      </section>

      {/* Plant Decoration */}
      <div className="relative h-[304px]">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/bb296635075087bd058af452f08f1a1355207ba0?width=708" 
          alt="Plant decoration"
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[354px] h-[304px]"
        />
      </div>

      {/* Swinging Decoration */}
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/c9fb25b6c7a205ceae616800abc23bec2dbd07aa?width=542" 
        alt="Swinging decoration"
        className="ml-auto mr-8 w-[271px] h-[241px] -mt-32"
      />
    </div>
  );
}
