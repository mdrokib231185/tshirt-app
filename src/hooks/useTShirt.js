import { useEffect, useState } from "react"

const useTShirt = () => {
      const [tShirts, setTShirts] = useState([])

      useEffect(() => {
            fetch('tshirts.json')
                  .then(res => res.json())
            .then(data =>setTShirts(data))
      }, [])
      return [tShirts, setTShirts]
}

export default useTShirt