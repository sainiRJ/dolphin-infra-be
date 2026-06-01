
 const genericServiceErrors = ({
	auth: {
		NoAuthorizationToken: {
			error: "NoAuthorizationToken",
			message: "No authorization token provided",
		},

		FailedToAuthenticate: {
			error: "FailedToAuthenticate",
			message: "Failed to authenticate the token",
		},
		InvalidRefreshToken: {
			error: "InvalidRefreshToken",
			message: "Invalid Refresh Token",
		},
	},

	errors: {
		ResourceNotFound: {
			error: "ResourceNotFound",

			message: "Resource Not Found",
		},

		ValidationError: {
			error: "ValidationError",

			message: "Validation Error",
		},

		SomethingWentWrong: {
			error: "SomethingWentWrong",
			message: "Something went wrong.",
		},
	},

	generic: {
		ServiceDoesNotExist: {
			error: "ServiceDoesNotExist",
			message: "Service does not exist",
		},
		ServiceAlreadyExist: {
			error: "ServiceAlreadyExist",
			message: "Service already exist",
		},
		StatusDoesNotExist: {
			error: "StatusDoesNotExist",
			message: "Status does not exist",
		},
		RoleDoesNotExist: {
			error: "RoleDoesNotExist",
			message: "Role does not exist",
		},
		EmailAlreadyExists: {
			error: "EmailAlreadyExists",
			message: "Email already exists",
		},
		ContactAlreadyExists: {
			error: "ContactAlreadyExists",
			message: "contact already exists",
		},
		InvalidCredentials: {
			error: "InvalidCredentials",
			message: "Invalid Credentials",
		},
		UnauthorizedAccess: {
			error: "UnauthorizedAccess",
			message: "You are not authorized to perform this action",
		},
	},
});

export {genericServiceErrors}

