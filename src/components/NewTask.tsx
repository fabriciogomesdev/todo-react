import styles from './NewTaks.module.css'

export function CreateTask(){
    function testedois(){
        console.log('funcinou')
    }
    
    return(
        <div >
            <form id="form-container" onSubmit={testedois}>
            <textarea className={styles.taskInput} placeholder="Digite aqui..."></textarea>
            <button >Enviar</button>
            </form>
        </div>
    
    )
}