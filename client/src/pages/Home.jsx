import {motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

import { CustomButton } from '../components';

const Home = () => {
  const snap = useSnapshot(state);

  return ( 
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img
              src='./AA_basketball.png'
              alt="logo"
              className="w-16 h-16 object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
            <h1 className="head-text">
              <span style={{ background: 'linear-gradient(to right, orange, navy)', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}>
              DESIGN <br className='x1:block hidden' /> HAVEN
              </span>
            </h1>

            </motion.div>
            <motion.div
              {... headContentAnimation}
              className= 'flex flex-col gap-5'
            >
              <p className='max-w-md font-normal text-gray-600 text-base'>
                Create a unique Mac Basketball shirt with this 3D customization tool. Showcase your<strong><span style={{color: 'navy'}}> passion </span> </strong>{" "}
                and <strong><span style={{ color: 'navy' }}>rep the squad</span></strong>
              </p>

              <CustomButton 
                type='filled'
                title="Customize It"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"/>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home