import { render, screen, fireEvent, waitFor } from '@testing-library/react-native'
import React from 'react'
import { SignInContainer } from '../../components/SignInContainer'

describe('SignIn', () => {
	describe('SignInContainer', () => {
		it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
			const mockOnSubmit = jest.fn()
			render(<SignInContainer onSubmit={mockOnSubmit} />)

			fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kalle')
			fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password')
			fireEvent.press(screen.getByText('Submit'))

			await waitFor(() => {
				expect(mockOnSubmit).toHaveBeenCalledTimes(1)
				expect(mockOnSubmit.mock.calls[0][0]).toEqual({
					username: 'kalle',
					password: 'password',
				})
			})
		})
	})
})