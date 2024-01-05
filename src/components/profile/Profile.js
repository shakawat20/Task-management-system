import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/Firebase';

const Profile = () => {
    const [user] = useAuthState(auth);
    const [edit, setEdit] = useState(false);
    const [bio, setBio] = useState('');

    const info = {
        email: user?.email,
        bio: bio
    };

    useEffect(() => {
        if (user) {
            fetch(`https://localhost:7000/bio/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log('Fetched bio data:', data);
                    setBio(data?.bio);
                })
                .catch(error => console.error('Error fetching bio:', error));
        }
    }, [user]);

    const handleBioChange = (event) => {
        setBio(event.target.value);
        console.log('Bio changed:', event.target.value);
    };

    const saveBio = () => {
        console.log('Saving bio...', info);
        fetch('https://localhost:7000/bio', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Bio saved:', data);
            })
            .catch(error => console.error('Error saving bio:', error));

        setEdit(false);
    };

    const toggleEdit = () => {
        setEdit(!edit);
    };

    return (
        <div className="flex flex-col items-center">
            <img src={user?.photoURL} className="w-32 h-32 rounded-full" alt="User Profile" />
            <h2 className="text-xl font-semibold mt-2">{user?.displayName}</h2>

            {edit ? (
                <div className="mt-4 flex flex-col justify-center items-center">
                    <div className="flex">
                        <div className="text-sm font-medium" style={{ height: '20px' }}>
                            Bio:
                        </div>
                        <textarea
                            className="w-96 h-20 p-2 border rounded-md"
                            style={{ width: '700px', height: '200px', marginLeft: '10px' }}
                            value={bio}
                            onChange={handleBioChange}
                            placeholder="Enter your bio..."
                        />
                    </div>
                    <br />
                    <button
                        className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        onClick={saveBio}
                    >
                        Save Bio
                    </button>
                </div>
            ) : (
                <div className="mt-4 flex flex-col justify-center items-center w-100">
                    <div>
                        <div className="text-gray-700 text-center mt-2 px-4" style={{ width: '800px', whiteSpace: 'pre-wrap' }}>
                            {bio}
                        </div>
                    </div>
                    <button
                        className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        onClick={toggleEdit}
                    >
                        Edit
                    </button>
                </div>
            )}
        </div>
    );
};

export default Profile;
