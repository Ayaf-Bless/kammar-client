import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { setCookies } from "../general/cookies";
import { apiRequest } from "../api-query/api-server-request";
import { AppResponse } from "@/interface/RequestResponse";

export const useSignIn = () => {
  return { register, handleSubmit, onSubmit, errors, loading, error };
};
