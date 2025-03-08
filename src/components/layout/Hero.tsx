import {Button} from "@/components";

const Hero: React.FC = () => {

    return (
        <div className={'grid grid-cols-1 gap-2'}>
            <div>
                {`Hi, I'm Tom Moreton, I'm a Full Stack Web Developer`}
            </div>
            <div>
                <Button label={'Learn More'}/>
            </div>
        </div>
    )
}

export default Hero
