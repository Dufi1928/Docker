import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LogIn from '../pages/auth/login';
import '@testing-library/jest-dom';




// Mock de useAuth et useRouter si nécessaire
jest.mock('../contexts/AuthProvider.js', () => ({
    useAuth: () => ({
        logIn: jest.fn(),
    }),
}));

jest.mock('next/router', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));

describe('Login Component', () => {
    test('renders email and password input fields', () => {
        render(<LogIn />);
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/mot de passe/i)).toBeInTheDocument();
    });

    test('displays error message when email is invalid', () => {
        render(<LogIn />);
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'invalidemail' } });
        fireEvent.click(screen.getByText(/connection/i));
        expect(screen.getByText(/l'email n'est pas valide/i)).toBeInTheDocument();
    });

    // Ajoutez d'autres tests ici, comme la simulation de clics, la vérification des appels API, etc.
});

