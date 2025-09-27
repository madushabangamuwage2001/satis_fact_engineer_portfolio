"use client"

import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import ContactModal from "../components/ContactModal"
import jest from "jest"
import * as emailService from "../services/emailService"

// Mock the email service
jest.mock("../services/emailService", () => ({
  initEmailJS: jest.fn(),
  sendEmail: jest.fn(),
}))

describe("ContactModal Component", () => {
  const mockOnClose = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    emailService.sendEmail.mockResolvedValue({
      success: true,
      message: "Message sent successfully!"
    })
  })

  test("renders modal when isOpen is true", () => {
    render(<ContactModal isOpen={true} onClose={mockOnClose} />)
    expect(screen.getByText("Get In Touch")).toBeInTheDocument()
  })

  test("does not render modal when isOpen is false", () => {
    render(<ContactModal isOpen={false} onClose={mockOnClose} />)
    expect(screen.queryByText("Get In Touch")).not.toBeInTheDocument()
  })

  test("switches between tabs", () => {
    render(<ContactModal isOpen={true} onClose={mockOnClose} />)

    const formTab = screen.getByText("Send Message")
    fireEvent.click(formTab)

    expect(screen.getByPlaceholderText("Enter your full name")).toBeInTheDocument()
  })

  test("submits form with valid data", async () => {
    emailService.sendEmail.mockResolvedValueOnce({
      success: true,
      message: "Message sent successfully!"
    })

    render(<ContactModal isOpen={true} onClose={mockOnClose} />)

    // Switch to form tab
    fireEvent.click(screen.getByText("Send Message"))

    // Fill form
    fireEvent.change(screen.getByPlaceholderText("Enter your full name"), {
      target: { value: "John Doe" },
    })
    fireEvent.change(screen.getByPlaceholderText("Enter your email address"), {
      target: { value: "john@example.com" },
    })
    fireEvent.change(screen.getByPlaceholderText("Tell us about your project or inquiry..."), {
      target: { value: "Test message" },
    })

    // Submit form
    fireEvent.click(screen.getByText("Send Message"))

    await waitFor(() => {
      expect(emailService.sendEmail).toHaveBeenCalledWith({
        name: "John Doe",
        email: "john@example.com",
        message: "Test message",
      })
    })
  })

  test("closes modal when close button is clicked", () => {
    render(<ContactModal isOpen={true} onClose={mockOnClose} />)

    const closeButton = screen.getByLabelText("Close modal")
    fireEvent.click(closeButton)

    expect(mockOnClose).toHaveBeenCalled()
  })
})
