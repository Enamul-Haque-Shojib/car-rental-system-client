import { TableCell } from "@/components/ui/table";
import { useEffect, useState } from "react";

const CountDownTimer = ({ booking, index }) => {

    const [timers, setTimers] = useState([])

    const formatTime = (ms) => {
        const days = Math.floor(ms / (1000 * 60 * 60 * 24));
        const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((ms / (1000 * 60)) % 60);
        const seconds = Math.floor((ms / 1000) % 60);
        return `${days}d ${hours}h ${minutes}m ${seconds}s`;

    }

    const updateCountDown = (pickupDate, dropOffDate, timer, index) => {
        const now = new Date()

        if (now < pickupDate) {
            timers[index] = 'will start soon'
            setTimers([...timers])

        }
        else if (now > pickupDate && now < dropOffDate) {
            const timeLeft = dropOffDate - now;
            timers[index] = ` ${formatTime(timeLeft)}`
            setTimers([...timers])


        } else {

            clearInterval(timer)
            // console.log('timer stop');
            timers[index] = 'Expired'
            setTimers([...timers])
        }

    }

    useEffect(() => {

        const intervals = []
        if (booking) {

            const pickupDate = new Date(booking.pickUpDate)
            const dropOffDate = new Date(booking.dropOffDate)
            const timer = setInterval(() => {
                updateCountDown(pickupDate, dropOffDate, timer, index)

            }, 1000)
            intervals.push(timer)

        }
        return () => {
            intervals.forEach(interval => clearInterval(interval))
        }

    }, [booking,index])


    return (
        <h2 className="text-red-500 font-bold ">{timers[index]}</h2>
    )
}

export default CountDownTimer
