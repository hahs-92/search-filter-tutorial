import './list.css'

export const List = ({ data }) => {
    return (
        <ul className='list'>
          {
            data
              .map(user => (
                <li className='listItem' key={ user.id }>{ user.first_name }</li>
            ))
          }
        </ul>
    )
}
