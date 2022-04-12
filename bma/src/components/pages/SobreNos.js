import sobrenos from '../../img/sn3.jpg'
import styles from './SobreNos.module.css'

function SobreNos (){
    return (
        <div>
            <div className={styles.container}>
            <img src={sobrenos} alt="Avatar" className={styles.image}/>
            <div className={styles.overlay}>
              <div className={styles.text}>SOBRE NÓS</div>
            </div>
            </div>
            <p className={styles.p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo nisi, semper a elit eget, pulvinar pulvinar augue. Donec id purus in ligula iaculis varius eu at elit. Sed cursus est vitae nibh pretium sagittis. Aenean elementum et arcu nec lacinia. Duis ac elit maximus, efficitur sem in, placerat ante. Praesent faucibus, nisi sed feugiat pretium, turpis ligula gravida nisl, non dapibus nisi nisl nec nunc. Proin bibendum congue efficitur. Nunc sagittis porta sollicitudin. Duis et justo id est aliquam aliquet ac sit amet diam. Etiam et facilisis purus. Donec vulputate risus eget nisi egestas pellentesque.
            <br/>
            <br/>
            Mauris ligula ex, feugiat vel nulla non, aliquet pretium nunc. Donec non augue erat. Nam sodales libero in quam bibendum, ut pharetra lacus commodo. Quisque justo dui, ullamcorper sed placerat eu, scelerisque ut eros. Maecenas magna quam, gravida sed magna eget, feugiat accumsan ligula. Aenean bibendum et dolor sed laoreet. Aenean nisl arcu, rutrum ac commodo et, euismod id odio. Nunc justo purus, semper in nisi eget, dignissim pretium metus. Integer sollicitudin libero eu leo rutrum, et iaculis ligula dapibus. Maecenas vulputate enim lacinia erat fermentum, in consectetur enim convallis.
            <br/>
            <br/>
            Sed id finibus purus, eu porttitor odio. Aliquam euismod molestie pharetra. Proin in pellentesque urna, et blandit eros. Suspendisse ac diam vulputate, convallis sapien sit amet, ornare massa. Aliquam dictum risus eget diam ultricies fermentum. Sed et lacus sed libero dignissim finibus. Morbi sit amet magna nec metus auctor scelerisque vitae eu dui. Pellentesque blandit risus sit amet pellentesque volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus finibus, metus ac euismod facilisis, augue risus mattis urna, sit amet aliquam nulla libero sed risus. Curabitur lobortis, ante non lacinia tempor, nulla massa accumsan urna, eu aliquet velit velit et turpis. Aliquam erat volutpat. Etiam a tincidunt nunc, gravida gravida nisl.
            </p>
        </div>
        
    )
    
    
    
    
}
export default SobreNos; 