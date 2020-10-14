import React from 'react'
import './style.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api'

interface TeacherItemProps {
    teacher: Teacher;
}

export interface Teacher {
    id: number;
    teacher: string;
    bio: string;
    avatar: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}


const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
    function createNewConnection() {
        api.post('/connections', {
            user_id: teacher.id,
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p> {teacher.bio} </p>
            <footer>
                <p>
                    Preço/hora
                        <strong>R$ {teacher.cost}</strong>
                </p>
                <a  
                    target="_blank"
                    onClick={createNewConnection} 
                    href={`http://wa.me/${teacher.whatsapp}`}>
                    <img src={whatsappIcon} alt="Whatsapp" />
                        Entrar em contato
                    </a>
            </footer>
        </article>
    )
}

export default TeacherItem;