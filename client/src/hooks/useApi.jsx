import { useState, useCallback } from "react";

/**
 * useApi
 * Centralized async handler for all API calls
 *
 * @returns { execute, loading, error, resetError }
 */
const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Execute any async API function safely
   *
   * @param {Function} apiFn - function that returns a promise
   * @param {Object} options - optional hooks
   */
  const execute = useCallback(
    async (apiFn, options = {}) => {
      const {
        onSuccess,
        onError,
        showError = true,
      } = options;

      setLoading(true);
      setError(null);

      try {
        const result = await apiFn();

        onSuccess?.(result);
        return result;
      } catch (err) {
        const message =
          err?.message ||
          err?.error ||
          "Something went wrong";

        if (showError) {
          setError(message);
        }

        onError?.(err);
        return null;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const resetError = () => setError(null);

  return {
    execute,
    loading,
    error,
    resetError,
  };
};

export default useApi;
